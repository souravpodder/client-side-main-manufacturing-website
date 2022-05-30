import React from 'react';
import search from '../../src/assets/images/search.jpg';

const Blogs = () => {
  return (
    <div className='w-11/12 mx-auto py-10'>
      <h3 className='font-bold text-xl'> Question 1:</h3>
      <p>We should use Functional or Stateless Components and React.PureComponent to improve react app performance. Avoiding Inline Function Declaration in the Render Function is necessary. we have to avoid using Index as Key for map, it sometimes slows the performance. we need to use  CSS animations in place of JS animations. Using CDN is a great way to improve the performance for website or mobile application.Because it renders to the users more quickly and easily.</p>
      <h3 className='font-bold text-xl mt-2'> Question 2:</h3>
      <p>We can manage state in different ways. We can use the hooks like useState, useEffect, useReducer etc. to manage states. They work so much efficiently with react app and we can modify them according to the situation. We can use Redux to manage states. we can use Jotai which is an open source state management library. we can also use react context api. By using context api we can share the same state among the Components which need the state. </p>

      <h3 className='font-bold text-xl mt-2'> Question 3:</h3>
      <p>In making applications and programming, we often want to take something from a object and extend it to another so it can be shared between them.
        For example, we have a user object with its properties and methods, and we want to make admin which is a little modified variants of it. In this case we would like to reuse what we have in user, we do not want to fully copy its methods.we just need to build a new object using prototypical inheritance. Prototypal inheritance is a feature that makes it possible. with some single lines of code we can avoid a lot of excess codes which are not necessary.  </p>


      <h3 className='font-bold text-xl mt-2'> Question 5:</h3>
      <p>Suppose the name by which we are searching is defined by searchedName variable. And the array in which we are searching is : searchedArray.  </p>

      <p>We can use the following Function to search by the name:</p>

      <img src={search} alt="" /> <br />

      <h3 className='font-bold text-xl mt-2'> Question 6:</h3>
      <p> For testing every single units of the application Unit testing is performed . It is implemented  in the coding stage of a development project. It is made  to test that each unit of the software code performs as desired. </p>

      <p>We should use unit tests for various reasons. Unit tests save time and money. If we deploy our project after successful uni testings we would face less problem in future. It will also save money because we will need less maintenance of the website later. Unit tests makes debugging easier. Unit tests make code reuse easier. If we want to reuse existing code in a new project, we can simply reuse both the code and tests to the new project,</p>

    </div>




  );
};

export default Blogs;