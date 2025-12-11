import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Mail, ArrowRight, ArrowLeft, CheckCircle, Send } from 'lucide-react';
import { useToast } from '../../../hooks/use-toast';
import { useNavigate, Link } from 'react-router-dom';

export const ForgotPassword = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock password reset email sending
        setTimeout(() => {
            setEmailSent(true);
            setIsLoading(false);

            toast({
                title: "Recovery email sent!",
                description: "Check your inbox for password reset instructions.",
            });
        }, 1500);
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-gray-50 flex items-center justify-center px-4 py-12">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Back Button */}
                <Link
                    to="/login"
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-teal-600 transition-fast mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to login
                </Link>

                {emailSent ? (
                    // Success State
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full shadow-xl shadow-teal-600/30 mb-6">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">Check Your Email</h1>
                        <p className="text-gray-600 mb-8">
                            We've sent password reset instructions to
                            <br />
                            <span className="font-medium text-gray-900">{email}</span>
                        </p>

                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 text-left">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Check your inbox</h3>
                                        <p className="text-sm text-gray-600">Look for an email from us with reset instructions</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Click the reset link</h3>
                                        <p className="text-sm text-gray-600">The link will expire in 24 hours for security</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Create new password</h3>
                                        <p className="text-sm text-gray-600">Choose a strong password you haven't used before</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 text-center mb-4">
                                    Didn't receive the email? Check your spam folder.
                                </p>
                                <Button
                                    onClick={() => setEmailSent(false)}
                                    variant="outline"
                                    className="w-full h-11 border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 transition-smooth"
                                >
                                    Resend Email
                                </Button>
                            </div>
                        </div>

                        <Button
                            onClick={handleBackToLogin}
                            className="mt-6 w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-teal transition-smooth"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Login
                        </Button>
                    </div>
                ) : (
                    // Form State
                    <>
                        {/* Logo/Brand */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-lg shadow-teal-600/30 mb-4">
                                <Send className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
                            <p className="text-gray-600">No worries, we'll send you reset instructions</p>
                        </div>

                        {/* Reset Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Input */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email Address
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="pl-11 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600 transition-smooth"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Enter the email address associated with your account
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-teal transition-smooth"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                        </div>
                                    ) : (
                                        <>
                                            Send Reset Link
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Help Text */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-600">
                                Remember your password?{' '}
                                <Link
                                    to="/login"
                                    className="font-medium text-teal-600 hover:text-teal-700 transition-fast"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
