import React from 'react';

function Blog() {
  const blogPosts = [
    {
      img: '/assets/blog1.jpg',
      alt: 'Top 5 Scenic Bike Routes in Nepal',
      title: 'Top 5 Scenic Bike Routes in Nepal',
      excerpt:
        'Discover the most breathtaking bike routes in Nepal, perfect for your next adventure. From the Annapurna Circuit to Kathmandu Valley...',
      link: '',
    },
    {
      img: '/assets/blog2.jpg',
      alt: 'How to Choose the Right Bike for Your Trip',
      title: 'How to Choose the Right Bike for Your Trip',
      excerpt:
        "Not sure which bike to rent? Learn how to pick the perfect bike for your journey, whether you're exploring the city or hitting the trails...",
      link: '',
    },
    {
      img: '/assets/blog3.jpg',
      alt: 'Tips for Safe Bike Riding in the Rain',
      title: 'Tips for Safe Bike Riding in the Rain',
      excerpt:
        'Riding in the rain can be challenging. Check out our top tips to stay safe and enjoy your ride, even in wet conditions...',
      link: '',
    },
  ];

  return (
    <>
      <main className="container">
        <section className="hero">
          <h1>Our Blog</h1>
          <p>
            Looking for a fun and eco-friendly way to explore the city? Rent one of our bikes and hit the streets in style! Whether you're a local looking to switch up your commute or a visitor eager to see the sights, our high-quality bicycles are the perfect companion. With flexible rental options, affordable rates, and a variety of models to choose from, we make it easy to get rolling. Pedal your way through scenic routes, discover hidden gems, and enjoy the freedom of two wheels—all while reducing your carbon footprint. Book your bike today and start your adventure!
          </p>
        </section>
        <section className="blog-posts">
          <h2>Latest Articles</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-card">
                <img src={post.img} alt={post.alt} />
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href={post.link} className="read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}

export default Blog;