import React, { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/use-toast';
import {
    LogOut,
    User,
    Calendar,
    Activity,
    Clock,
    TrendingUp,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

export const Dashboard = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem('user');
        if (!userData) {
            navigate('/login');
            return;
        }

        try {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
        } catch (error) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');

        toast({
            title: "Logged out successfully",
            description: "See you again soon!",
        });

        setTimeout(() => {
            navigate('/login');
        }, 500);
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
            </div>
        );
    }

    const stats = [
        {
            title: 'Total Sessions',
            value: '12',
            icon: Calendar,
            change: '+2 this week',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            title: 'Active Plans',
            value: '3',
            icon: Activity,
            change: 'In progress',
            color: 'text-teal-600',
            bgColor: 'bg-teal-50'
        },
        {
            title: 'Hours Completed',
            value: '18.5',
            icon: Clock,
            change: '+3.5 this month',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },
        {
            title: 'Progress',
            value: '87%',
            icon: TrendingUp,
            change: '+12% improvement',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        }
    ];

    const upcomingSessions = [
        {
            id: 1,
            service: 'Orthopedic Rehabilitation',
            date: 'Tomorrow',
            time: '10:00 AM',
            therapist: 'Dr. Sarah Johnson'
        },
        {
            id: 2,
            service: 'Balance & Fall Prevention',
            date: 'Friday, Dec 29',
            time: '2:30 PM',
            therapist: 'Dr. Michael Chen'
        },
        {
            id: 3,
            service: 'Pain Management',
            date: 'Monday, Jan 2',
            time: '11:00 AM',
            therapist: 'Dr. Emily Williams'
        }
    ];

    const recentActivity = [
        {
            id: 1,
            action: 'Completed session',
            description: 'Neurological Therapy - 60 min',
            time: '2 hours ago'
        },
        {
            id: 2,
            action: 'Updated treatment plan',
            description: 'Post-Surgical Care adjustments',
            time: 'Yesterday'
        },
        {
            id: 3,
            action: 'New booking',
            description: 'Mobility Training session',
            time: '2 days ago'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl shadow-md flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg">
                                <User className="w-5 h-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">{user.email}</span>
                            </div>
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                className="border-2 border-gray-300 hover:border-red-600 hover:text-red-600 transition-smooth"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back! 👋
                    </h2>
                    <p className="text-gray-600">
                        Here's an overview of your rehabilitation progress
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={index} className="p-6 hover:shadow-lg transition-smooth border-gray-200">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                                        <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                                        <p className="text-xs text-gray-500">{stat.change}</p>
                                    </div>
                                    <div className={`${stat.bgColor} p-3 rounded-xl`}>
                                        <Icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Upcoming Sessions */}
                    <Card className="p-6 border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Upcoming Sessions</h3>
                            <Button
                                variant="ghost"
                                className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                                onClick={() => navigate('/booking')}
                            >
                                View All
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                        <div className="space-y-4">
                            {upcomingSessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="p-4 bg-gray-50 rounded-xl hover:bg-teal-50/50 transition-smooth border border-gray-200 hover:border-teal-200"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-gray-900">{session.service}</h4>
                                        <span className="text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded-full">
                                            Confirmed
                                        </span>
                                    </div>
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {session.date} at {session.time}
                                        </div>
                                        <div className="flex items-center">
                                            <User className="w-4 h-4 mr-2" />
                                            {session.therapist}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="p-6 border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                        </div>
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-0">
                                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                                        <CheckCircle className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 mb-1">{activity.action}</p>
                                        <p className="text-sm text-gray-600 mb-1">{activity.description}</p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="mt-8">
                    <Card className="p-8 border-gray-200 bg-gradient-to-br from-teal-50 to-white">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Ready for Your Next Session?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Book a new appointment or reschedule an existing one
                            </p>
                            <Button
                                onClick={() => navigate('/booking')}
                                className="h-12 px-8 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-teal transition-smooth"
                            >
                                Book New Session
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
