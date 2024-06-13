import React from 'react';

// ---------------- style ---------------- //
const article = {
    backgroundColor: '#ffff',
    padding: '5px 30px',
    borderRadius: '5px',
    margin: '20px 0',
};

const header = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};

const textContainer = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
};

const title = {
    color: '#333',
    margin: '0',
};

const subtitle = {
    color: '#333',
    margin: '0',
    fontSize: '14px',
};

const content = {
    color: 'grey',
    fontSize: '19px',
    lineHeight: '1.6',
    textAlign: 'justify',
};

const image = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border:'2px solid #387490'
};

// ---------------- code ---------------- //
const Article = () => {
    return (
        <article style={article}>
            <div style={header}>
                <img
                    src="https://media.licdn.com/dms/image/C5603AQEkYs2WR7Hw-w/profile-displayphoto-shrink_800_800/0/1568866472270?e=2147483647&v=beta&t=1ABpnUtz645mvnEOJSTJzYpjUnBtCTXylQ_iCzGQAiI"
                    alt="Jordan Walke"
                    style={image}
                />
                <div style={textContainer}>
                    <h2 style={title}>Jordan Walke</h2>
                    <p style={subtitle}>(Software Engineer)</p>
                </div>
            </div>
            <p style={content}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jordan Walke is a renowned software engineer known for his contributions to web development, particularly for creating React.js, a JavaScript library for building user interfaces. React.js, developed by Walke while he was working at Facebook, revolutionized front-end web development by introducing a component-based architecture and a virtual DOM, which significantly enhanced performance and developer productivity.

                Before React.js, Walke worked on various projects at Facebook, including the early versions of the Facebook Ads Manager. However, it was React.js that propelled him into the spotlight of the tech community.

                Walke's work on React.js has had a profound impact on the way modern web applications are built, influencing countless developers and companies worldwide. React.js is widely adopted by both large tech companies and startups due to its efficiency, flexibility, and scalability.

                Beyond his contributions to React.js, Walke is known for his commitment to open-source development and his efforts to continually improve web development practices. He has remained an active figure in the developer community, sharing his knowledge and insights through talks, blog posts, and contributions to open-source projects.

                Walke's work exemplifies the power of innovation and collaboration in driving the evolution of web technology, and his contributions continue to shape the landscape of web development for years to come.

                In addition to his groundbreaking work on React.js, Jordan Walke has also been involved in advancing the field of web development through his contributions to related technologies and frameworks. He has played a key role in shaping the ecosystem around React.js, fostering the growth of tools and libraries that complement and extend its capabilities.

                Moreover, Walke's advocacy for open-source development has fostered a culture of collaboration within the web development community. By actively engaging with fellow developers through talks, blog posts, and contributions to open-source projects, he has not only shared his expertise but also inspired others to contribute to the collective advancement of web technology.
            </p>
        </article>
    );
}

export default Article;
