import React from 'react';
import { ArrowRight } from 'lucide-react';
import './SuccessStoriesSection.css';

export default function SuccessStoriesSection() {
  const stories = [
    {
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop', // Placeholder for toys
      quote: '"From non-verbal at 3 to full sentences and mainstream school at 5. The team at Unique Minds gave us our son\'s future back."',
      name: 'Arjun, age 5',
      parent: 'Mrs. Priya S., Lucknow'
    },
    {
      img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop', // Placeholder for kids playing
      quote: '"ADHD felt like a wall. Today she\'s a school topper with friends she adores. The therapists are angels."',
      name: 'Ishita, age 7',
      parent: 'Mr. Rohan M., Gurgaon'
    },
    {
      img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop', // Placeholder for kids group
      quote: '"Sensory meltdowns ruled our home. After 9 months of OT we celebrate birthdays like every other family."',
      name: 'Veer, age 4',
      parent: 'Mrs. Sneha K., Mohali'
    }
  ];

  return (
    <section className="stories-section">
      <div className="stories-container">
        
        <div className="stories-header">
          <div className="stories-title-area">
            <h4 className="stories-label">SUCCESS STORIES</h4>
            <h2 className="stories-title">
              Real children. Real progress. Real families.
            </h2>
          </div>
          <a href="#stories" className="stories-link">
            More stories <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="stories-grid">
          {stories.map((story, i) => (
            <div key={i} className="story-card">
              <img src={story.img} alt={`Story of ${story.name}`} className="story-img" />
              <div className="story-content">
                <span className="story-quote-icon">❞</span>
                <p className="story-quote-text">{story.quote}</p>
                
                <div className="story-author">
                  <h4>{story.name}</h4>
                  <p>{story.parent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
