import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Benefits of Home-Based Physical Therapy',
      excerpt: 'Discover why more patients are choosing home-based rehabilitation services for faster, more comfortable recovery in familiar surroundings.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      author: 'Dr. Maria Rodriguez',
      date: 'January 15, 2025',
      category: 'Rehabilitation',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding Post-Surgical Rehabilitation',
      excerpt: 'Learn about the importance of proper post-surgical care and how our specialized therapists can help you regain strength and mobility.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
      author: 'James Thompson',
      date: 'January 10, 2025',
      category: 'Recovery',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Fall Prevention Strategies for Seniors',
      excerpt: 'Essential balance exercises and safety tips to help seniors maintain independence and reduce the risk of falls at home.',
      image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=600&fit=crop',
      author: 'Sarah Chen',
      date: 'January 5, 2025',
      category: 'Senior Care',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Managing Chronic Pain Through Physical Therapy',
      excerpt: 'Effective techniques and exercises for managing chronic pain without relying solely on medication.',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
      author: 'Michael Anderson',
      date: 'December 28, 2024',
      category: 'Pain Management',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Neurological Rehabilitation: What to Expect',
      excerpt: 'A comprehensive guide to neurological rehabilitation for patients recovering from stroke, brain injury, or neurological conditions.',
      image: 'https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?w=800&h=600&fit=crop',
      author: 'Sarah Chen',
      date: 'December 20, 2024',
      category: 'Neurology',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'The Role of Family in Home Rehabilitation',
      excerpt: 'How family members can support and actively participate in their loved one\'s recovery journey at home.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      author: 'Emily Parker',
      date: 'December 15, 2024',
      category: 'Family Care',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#1a1d23] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                Our Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest news, tips, and expert advice on physical therapy and rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button
                      variant="ghost"
                      className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium group/btn"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest articles and health tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;