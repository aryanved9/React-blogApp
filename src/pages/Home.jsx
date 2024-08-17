import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-0 mt-0 text-center bg-gray-100">
                <Container>
                    
                    <div className="flex flex-col items-center mb-8">
                        <h1 className="text-4xl mt-4 font-bold text-gray-600 hover:text-gray-500">
                            Welcome to Our Blog
                        </h1>
                        <p className="text-lg text-gray-600 mt-4">
                            Explore how blogging can enrich your daily life and connect you with others.
                        </p>
                        <Link to="/login">
                            <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors duration-300">
                                Login to Read Posts
                            </button>
                        </Link>
                    </div>

                    {/* Featured Posts Section */}
                    <div className="flex flex-wrap -mx-4">
                        {/* Post 1 */}
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="Post 1"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-gray-600">
                                        The Power of Blogging in Daily Life
                                    </h2>
                                    <p className="text-gray-600">
                                        Blogging offers a platform to express your thoughts, document your journey, and connect with like-minded individuals. It can be a daily habit that enhances your personal growth and communication skills.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="Post 2"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-gray-600">
                                        Blogging: A Tool for Personal Development
                                    </h2>
                                    <p className="text-gray-600">
                                        Blogging can be a powerful tool for personal development. It allows you to reflect on your experiences, set goals, and share insights that can help others while reinforcing your own learning.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Post 3 */}
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    alt="Post 3"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-gray-600">
                                        Use Cases of a Blogging Website
                                    </h2>
                                    <p className="text-gray-600">
                                        Blogging websites serve multiple purposes: from sharing personal stories to building professional brands, educating audiences, and driving social change. Learn how to make the most out of your blog.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home