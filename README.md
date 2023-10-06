# change-bgColor

Hosting Link: https://galihap76.github.io/javascript-background-color-changer.github.io/
<hr>

<h2>HTML code description</h2>

In this HTML snippet, there's a "div" element with the class "contain" that contains three "button" elements. Each button appears to represent an action to modify the appearance of an element on a webpage. Here's a description in paragraph format:

Inside a "div" with the class "contain," there are three "button" elements. The first button is labeled "Change Background color," suggesting that it likely triggers an action to modify the background color of an element on the webpage. The second button is labeled "Change Background Image," indicating that it might initiate an action to replace or update the background image of an element. The third button is labeled "Change Gradient color," implying that it could be used to apply gradient backgrounds with different colors to an element. These buttons provide a user interface for making dynamic visual changes to the webpage's elements, such as background elements, and the specific functionality for each button would be implemented using JavaScript or other scripting languages.

<hr>

<h2>CSS code description</h2>

1.	The universal selector * is used to apply the following styles to all elements:
      •	margin: 0; removes any margin space around elements.
      •	padding: 0; removes any padding within elements.
      •	box-sizing: border-box; sets the box-sizing model to border-box, which includes padding and borders within the element's total width and height.

2.	The body element is styled:
      •	width: 100%; sets the width of the body to 100%.
      •	height: 100vh; sets the height of the body to 100% of the viewport height.
      •	display: flex; uses flexbox for layout.
      •	justify-content: center; horizontally centers its child elements.
      •	align-items: center; vertically centers its child elements.
      •	transition: 0.5s ease; adds a smooth transition effect with a duration of 0.5 seconds.

3.	The .contain class styles a container element:
      •	display: flex; uses flexbox for layout.
      •	justify-content: center; horizontally centers its child elements.
      •	align-items: center; vertically centers its child elements.
      •	flex-wrap: wrap; allows its child elements to wrap to the next line if necessary.
      •	height: 30%; sets the height of the container to 30% of its parent's height.

4.	The button element is styled:
      •	padding: 10px 20px; sets padding on the top and bottom (10px) and left and right (20px) of the button.
      •	font-size: 16px; sets the font size of the button text to 16 pixels.
      •	text-align: center; centers the text horizontally within the button.
      •	background-color: rgba(52, 73, 94, 0.8); sets the background color of the button with some transparency.
      •	border-radius: 5px; rounds the corners of the button.
      •	border: none; removes the button border.
      •	cursor: pointer; changes the cursor to a pointer when hovering over the button.
      •	color: white; sets the text color to white.
      •	margin: 0 20px; adds margin to the left and right of the button.
      •	font-weight: 500; sets the font weight to 500 (semi-bold).
      •	transition: 0.2s ease-in-out; adds a smooth transition effect with a duration of 0.2 seconds.
      •	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6); adds a box shadow to the button for a raised effect.

5.	The button:hover pseudo-class defines styles for the button when hovered:
      •	transform: scale(1.1); scales the button to 110% of its original size.
      •	opacity: 0.7; reduces the opacity of the button to 70% when hovered.
      •	transition: 0.2s ease-in-out; adds a smooth transition effect with a duration of 0.2 seconds for the hover effect.

<hr>

<h2>JS code description</h2>

1.	It selects the body element and stores it in a variable called body.

2.	It selects all the button elements and stores them in a NodeList called btn.

3.	Three event listeners are added to the buttons:
    •	The first button (btn[0]) triggers the color function when clicked.
    •	The second button (btn[1]) triggers the image function when clicked.
    •	The third button (btn[2]) triggers the gradient function when clicked.
  	
4.	The color function is responsible for changing the background color of the body element. It generates a random RGB color and sets it as the background color of the body. The backgroundImage property is set to "none" to ensure that no background image is displayed when changing the color.

5.	The image function is used to change the background of the body element to a randomly selected image URL from the arr1 array. It also configures the background to have no repeat, cover the entire viewport, and be centered.
  
6.	The gradient function changes the background of the body element to a randomly selected gradient from the arr2 array. It uses the linear-gradient CSS property to create the gradient effect.

<hr>

<h2> UI </h2>

[screen-capture (2).webm](https://github.com/trishaDas13/change-bgColor/assets/126088849/98071ee0-2650-4a11-9afd-da5b8a2d02f4)
