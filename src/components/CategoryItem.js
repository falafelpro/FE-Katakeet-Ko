import React from "react";

function CategoryItem(props) {
  return (
    <div>
      <div class="container center">
        <div class="card center">
          <img
            class="padded"
            src="../assets/pika-profile.png"
            alt="pika picture"
          />
          <h1 class="padded">Arabic food</h1>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
