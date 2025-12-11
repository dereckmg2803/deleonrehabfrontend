import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Checkbox } from '../../../components/ui/checkbox';
import { Mail, Lock, ArrowRight, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { useToast } from '../../../hooks/use-toast';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (checked) => {
        setFormData({
            ...formData,
            rememberMe: checked
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock authentication
        setTimeout(() => {
            // Store user data in localStorage
            const userData = {
                email: formData.email,
                loggedIn: true,
                loginTime: new Date().toISOString()
            };

            localStorage.setItem('user', JSON.stringify(userData));

            if (formData.rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            }

            toast({
                title: "Welcome back!",
                description: "You've successfully logged in.",
            });

            setIsLoading(false);

            // Redirect to dashboard
            setTimeout(() => {
                navigate('/dashboard');
            }, 500);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-gray-50 flex items-center justify-center px-4 py-12">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo/Brand */}
                <div className="text-center mb-8 mt-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-lg shadow-teal-600/30 mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to continue to your account</p>
                </div>

                {/* Login Card */}
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
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="pl-11 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600 transition-smooth"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="pl-11 pr-11 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600 transition-smooth"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-fast"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="rememberMe"
                                    checked={formData.rememberMe}
                                    onCheckedChange={handleCheckboxChange}
                                    className="border-gray-300 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                                />
                                <Label
                                    htmlFor="rememberMe"
                                    className="text-sm font-normal text-gray-600 cursor-pointer"
                                >
                                    Remember me
                                </Label>
                            </div>
                            <Link
                                to="/forgot-password"
                                className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-fast"
                            >
                                Forgot password?
                            </Link>
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
                                    Sign In
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">New to our platform?</span>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-medium text-teal-600 hover:text-teal-700 transition-fast"
                            >
                                Create one now
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>By signing in, you agree to our</p>
                    <div className="mt-1 space-x-4">
                        <a href="#" className="text-teal-600 hover:text-teal-700 transition-fast">
                            Terms of Service
                        </a>
                        <span className="text-gray-300">·</span>
                        <a href="#" className="text-teal-600 hover:text-teal-700 transition-fast">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
