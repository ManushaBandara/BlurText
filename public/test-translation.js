/**
 * Translation Test for BlurText
 * This script tests the Google Translate integration
 */

// Test function to verify translation API
async function testTranslation() {
    const testTexts = [
        "Your anonymous messaging app.",
        "Loading your anonymous experience...", 
        "Home",
        "Messages",
        "Privacy & safety"
    ];
    
    const languages = ["ru", "es", "fr", "de", "ja"];
    
    console.log("🌍 Testing BlurText Translation System");
    console.log("=====================================");
    
    for (const lang of languages) {
        console.log(`\n📝 Testing ${lang.toUpperCase()}:`);
        
        for (const text of testTexts.slice(0, 2)) { // Test first 2 texts
            try {
                const response = await fetch('/api/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: text,
                        targetLanguage: lang
                    })
                });
                
                const result = await response.json();
                console.log(`  "${text}" → "${result.translatedText}"`);
            } catch (error) {
                console.error(`  Error translating "${text}":`, error);
            }
        }
    }
    
    console.log("\n✅ Translation test completed!");
}

// Test the translation when page loads
if (typeof window !== 'undefined') {
    window.testTranslation = testTranslation;
    console.log("🔧 Translation test function loaded. Run testTranslation() to test.");
}

export { testTranslation };
