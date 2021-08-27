import React, { useState } from 'react';
import { ItemsContainer, ItemsProducts, Item, ItemImage, TextDiv, Location, ImageDiv, CategoryDiv, CategoryIcon, Title, Time } from './Styles/Items.style.js';
import dummyData from '../../dummydata/dummydata.js'

const Items = () => {

const [showModal, setModal] = useState(false);

  return (
    <ItemsContainer>
      <ItemsProducts>
        {dummyData.contributions.map((item, index) =>
          <Item>
            <ImageDiv>
              <ItemImage src={item.photos} />
              <CategoryDiv>
                <CategoryIcon>∆</CategoryIcon>
              </CategoryDiv>
            </ImageDiv>
            <TextDiv>
              <Title>{item.title}</Title>
              <Location>Location</Location>
              <Time>5m ago</Time>
            </TextDiv>
          </Item>
        )}
      </ItemsProducts>

    </ItemsContainer>
  );
};

export default Items;