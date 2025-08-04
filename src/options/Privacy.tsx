import React from "react";
import Welcom from "@/app/welcom";
import { TranslatedText } from "@/hooks/useTranslation";

interface PrivacyProps {
  onBack?: () => void;
}

const Privacy = ({ onBack }: PrivacyProps) => {
  return (
    <div>
      <Welcom />
      <div className="bg-white dark:bg-[#262335] text-black dark:text-[#ededed] min-h-screen">
        <div className="flex items-center px-4 mt-4">
          {onBack && (
            <button
              onClick={onBack}
              className="mr-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
              aria-label="Go back"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <h1 className="font-bold">
            <TranslatedText>Privacy Policy</TranslatedText>
          </h1>
        </div>
        <hr className="opacity-50 border-gray-200 dark:border-gray-700" />
        <div className="px-6 mt-6 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h2 className="font-bold text-xl mb-4 text-black dark:text-white">
              <TranslatedText>Privacy & Safety</TranslatedText>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
              <TranslatedText>BlurText provides anonymous social interaction through persistent, unique credentials. We give you a unique username and password for your first visit without requiring any personal information. Your posts and interactions are saved in encrypted form, but never linked to your real identity.</TranslatedText>
            </p>
          </div>

          <div className="space-y-8">
            {/* Anonymous Social Platform */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                <TranslatedText>How Anonymous Login Works</TranslatedText>
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>
                    <TranslatedText>We provide you a unique username and password on first visit</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>
                    <TranslatedText>Save your credentials to access your posts and activity later</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span><TranslatedText>No Google, email, or social media login required</TranslatedText></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>
                    <TranslatedText>Use the same username/password to see your previous posts</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span><TranslatedText>Track your own messages, comments, and likes</TranslatedText></span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-white dark:bg-gray-800/30 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                <TranslatedText>What Gets Saved vs. What Doesn&apos;t</TranslatedText>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-green-600 dark:text-green-400 mb-3 font-semibold text-center">
                    <TranslatedText>✅ What we save (encrypted):</TranslatedText>
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>
                        <TranslatedText>Your posts and messages (linked to your anonymous username)</TranslatedText>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><TranslatedText>Your likes and interactions on content</TranslatedText></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><TranslatedText>Your anonymous username/password combination</TranslatedText></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><TranslatedText>Your activity history within the platform</TranslatedText></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-red-600 dark:text-red-400 mb-3 font-semibold text-center">
                    <TranslatedText>❌ What we never collect:</TranslatedText>
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span><TranslatedText>Your real name or personal information</TranslatedText></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span><TranslatedText>Email addresses or phone numbers</TranslatedText></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span><TranslatedText>Google, Facebook, or other account data</TranslatedText></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span><TranslatedText>IP addresses or device tracking</TranslatedText></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span>
                        <TranslatedText>Connection between your username and real identity</TranslatedText>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                <TranslatedText>Encryption & Security</TranslatedText>
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span>
                    <TranslatedText>All messages and posts are encrypted before storage</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span>
                    <TranslatedText>Anonymous usernames are not linked to real identity</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span><TranslatedText>Secure password generation for each new user</TranslatedText></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span><TranslatedText>No cross-identity data correlation possible</TranslatedText></span>
                </li>
              </ul>
            </div>

            {/* Session Management */}
            <div className="bg-white dark:bg-gray-800/30 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                <TranslatedText>Persistent Anonymous Identity</TranslatedText>
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span>
                    <TranslatedText>Keep your username and password to maintain your anonymous identity</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span>
                    <TranslatedText>View your previous posts, comments, and likes anytime</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span><TranslatedText>Build your anonymous presence over time</TranslatedText></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span><TranslatedText>Other users see only your chosen username</TranslatedText></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span><TranslatedText>Your real identity remains completely hidden</TranslatedText></span>
                </li>
              </ul>
            </div>

            {/* Technical Details */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/40 dark:to-gray-800/40 rounded-lg p-6 border border-blue-200 dark:border-gray-600">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                <TranslatedText>How The System Works</TranslatedText>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                <TranslatedText>Technical overview of our anonymous but persistent system:</TranslatedText>
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🚪</div>
                  <h4 className="font-medium text-black dark:text-white mb-1">
                    <TranslatedText>First Visit</TranslatedText>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <TranslatedText>Receive unique username + password</TranslatedText>
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💾</div>
                  <h4 className="font-medium text-black dark:text-white mb-1">
                    <TranslatedText>Save Credentials</TranslatedText>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <TranslatedText>Access your posts and activity later</TranslatedText>
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <h4 className="font-medium text-black dark:text-white mb-1">
                    <TranslatedText>Return Visits</TranslatedText>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <TranslatedText>Login with same credentials to see history</TranslatedText>
                  </p>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                <TranslatedText>Community Guidelines</TranslatedText>
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span><TranslatedText>Use your anonymous username responsibly</TranslatedText></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span>
                    <TranslatedText>Don&apos;t share others&apos; personal information</TranslatedText>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span><TranslatedText>Report harmful or inappropriate content</TranslatedText></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span><TranslatedText>Remember: anonymity enables freedom, not harm</TranslatedText></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span><TranslatedText>Keep the platform safe for everyone</TranslatedText></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12 text-center">
            <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
              <TranslatedText>Questions or Concerns?</TranslatedText>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              <TranslatedText>If you have any questions about our privacy practices or need to report a security concern, please contact our development team through our official GitHub repository.</TranslatedText>
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-8 pb-4">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              <TranslatedText>Last updated: August 2025</TranslatedText>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
