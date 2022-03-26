import React from 'react';
import './FAQs.css';

const FAQs = () => {
   return (
      <div className='questions'>
            <h1>Here goes some questions</h1>
             <h1>Q1. How react works ?</h1>
             <p> Ans:React is a very popular JavaScript library. With over 5.5 million weekly downloads, React is enjoying great popularity. But not a lot of React developers know how React works under the hood.In this post, I'll try to uncover some interesting things about React which you, as a React developer, might find fascinating. Let's start at the beginning.
             But before we start, if you're a React developer, I have some exciting news for you! Once you complete this article, you'll get to develop something cool with React and win prizes on the way.At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.
             Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
              </p>

             <h1>Q2. Difference between props and state </h1>
              <div className='answer-box'>
                
                Ans:                            
                     <div>
                        <h4>props</h4>
                        <ul>
                           <li>The Data is passed from one component to another.</li>
                           <li>It is Immutable (cannot be modified).</li>
                           <li>Props can be used with state and functional components.</li>
                           <li>Props are read-only</li>
                        </ul>
                     </div>

                     <div>
                        <h4>state</h4>
                        <ul>
                           <li>The Data is passed within the component only.</li>
                           <li>It is Mutable ( can be modified).</li>
                           <li>State can be used only with the state components/class component</li>
                           <li>State is both read and write.</li>
                        </ul>
                     </div>
             </div>
         
      </div>
   );
};

export default FAQs;