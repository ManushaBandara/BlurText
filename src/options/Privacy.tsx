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
                How Anonymous Login Works
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>
                    We provide you a unique username and password on first visit
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>
                    Save your credentials to access your posts and activity
                    later
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>No Google, email, or social media login required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>
                    Use the same username/password to see your previous posts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>Track your own messages, comments, and likes</span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-white dark:bg-gray-800/30 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                What Gets Saved vs. What Doesn&apos;t
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-green-600 dark:text-green-400 mb-3 font-semibold text-center">
                    ✅ What we save (encrypted):
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>
                        Your posts and messages (linked to your anonymous
                        username)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Your likes and interactions on content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Your anonymous username/password combination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Your activity history within the platform</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-red-600 dark:text-red-400 mb-3 font-semibold text-center">
                    ❌ What we never collect:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span>Your real name or personal information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span>Email addresses or phone numbers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span>Google, Facebook, or other account data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span>IP addresses or device tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span>
                        Connection between your username and real identity
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                Encryption & Security
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span>
                    All messages and posts are encrypted before storage
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span>
                    Anonymous usernames are not linked to real identity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span>Secure password generation for each new user</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔒</span>
                  <span>No cross-identity data correlation possible</span>
                </li>
              </ul>
            </div>

            {/* Session Management */}
            <div className="bg-white dark:bg-gray-800/30 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                Persistent Anonymous Identity
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span>
                    Keep your username and password to maintain your anonymous
                    identity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span>
                    View your previous posts, comments, and likes anytime
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span>Build your anonymous presence over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span>Other users see only your chosen username</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">👤</span>
                  <span>Your real identity remains completely hidden</span>
                </li>
              </ul>
            </div>

            {/* Technical Details */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/40 dark:to-gray-800/40 rounded-lg p-6 border border-blue-200 dark:border-gray-600">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                How The System Works
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                Technical overview of our anonymous but persistent system:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🚪</div>
                  <h4 className="font-medium text-black dark:text-white mb-1">
                    First Visit
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive unique username + password
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💾</div>
                  <h4 className="font-medium text-black dark:text-white mb-1">
                    Save Credentials
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Access your posts and activity later
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <h4 className="font-medium text-black dark:text-white mb-1">
                    Return Visits
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Login with same credentials to see history
                  </p>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white text-center">
                Community Guidelines
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span>Use your anonymous username responsibly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span>
                    Don&apos;t share others&apos; personal information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span>Report harmful or inappropriate content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span>Remember: anonymity enables freedom, not harm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">⚠️</span>
                  <span>Keep the platform safe for everyone</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12 text-center">
            <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
              Questions or Concerns?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              If you have any questions about our privacy practices or need to
              report a security concern, please contact our development team
              through our official GitHub repository.
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-8 pb-4">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Last updated: August 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
