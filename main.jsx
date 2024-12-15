import React from "react";
import ReactDom from "react-dom/client";

const rootDiv = document.getElementById("root");

ReactDom.createRoot(rootDiv).render(
  <div>
    <h1>Hello React 1</h1>
    <h1>Hello React 2</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ad.</p>
    <img src="src\assets\download.jpg" alt="picture" width={500} />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptatibus
    delectus consectetur sequi alias, ratione neque porro quam repellendus a
    tempora tempore accusamus laboriosam labore laudantium. Pariatur cumque
    veritatis nemo ea odio velit, ducimus itaque possimus accusantium
    necessitatibus consectetur atque nostrum. Eum libero quis fugiat veritatis
    ducimus pariatur aut maiores?
  </div>
);
