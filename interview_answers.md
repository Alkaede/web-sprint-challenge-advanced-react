# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
  stateful component contains reusable states that can be applied to different components instead of being part of local states.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
  componentWillMount is called before render method is executed. componentWillUpdate is called every time a re-render is required.

3. Define stateful logic.
  logic that is built into a component, dealing with states 

4. What are the three step of creating a successful test? What is done in each phase?
  Arrange: typically the render method is called here
  Act: quering the DOM to grab specific text we expect to be rendered
  Assert: assert that the queried element has been rendered successfully 