import React, { useState, useEffect, useContext } from "react";
import { List, message, Avatar } from "antd";
import VirtualList from "rc-virtual-list";
import { productContext } from "../../context/productContaext";

const AdminProductList = () => {
  const { products, getProducts } = useContext(productContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <List>
      <VirtualList
        data={[]}
        // height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        // onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default AdminProductList;
