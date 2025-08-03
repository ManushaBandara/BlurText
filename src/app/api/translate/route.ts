import { NextRequest, NextResponse } from 'next/server';

// Simple translation service using Google Translate API
// Note: For production, you should use Google Cloud Translation API with proper authentication
export async function POST(request: NextRequest) {
  let text = '';
  let targetLanguage = '';
  
  try {
    const body = await request.json();
    text = body.text;
    targetLanguage = body.targetLanguage;

    if (!text || !targetLanguage) {
      return NextResponse.json(
        { error: 'Text and target language are required' },
        { status: 400 }
      );
    }

    // If target language is English, return original text
    if (targetLanguage === 'en') {
      return NextResponse.json({ translatedText: text });
    }

    // Using Google Translate free endpoint (less reliable, consider Google Cloud Translation API for production)
    const encodedText = encodeURIComponent(text);
    const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodedText}`;

    const response = await fetch(translateUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!response.ok) {
      console.error(`Google Translate API error: ${response.status} ${response.statusText}`);
      throw new Error(`Translation service unavailable: ${response.status}`);
    }

    const data = await response.json();
    
    // Parse Google Translate response format
    let translatedText = '';
    if (data && data[0]) {
      for (const item of data[0]) {
        if (item[0]) {
          translatedText += item[0];
        }
      }
    }

    // If no translation found, return original text
    const finalText = translatedText.trim() || text;
    
    return NextResponse.json({ translatedText: finalText });
  } catch (error) {
    console.error('Translation API error:', error);
    
    // Always return original text as fallback
    return NextResponse.json(
      { 
        error: 'Translation failed', 
        translatedText: text || '',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 200 } // Return 200 to avoid fetch errors, but include error info
    );
  }
}
