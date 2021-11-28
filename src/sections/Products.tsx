import React from "react";
import Section, { SectionProps } from "components/Section";
import Product from "components/Product";
import { Tab, TabPanel, TabContent, Tabs, TabProps } from "components/Tab";
import {
  IMAGES_OF_PRODUCTS,
  PRODUCTS_IMAGES_PATH,
  PRODUCTS_TYPES,
} from "../constants";

const TabProductsPanel: React.FC<TabProps> = ({ children, ...props }) => (
  <TabPanel {...props}>
    <div className="tab-products-content">{children}</div>
  </TabPanel>
);

const Products: React.FC<Pick<SectionProps, "isWhiteBlock">> = ({
  isWhiteBlock,
}) => {
  return (
    <Section id="products" title="Товары" isWhiteBlock={isWhiteBlock}>
      <div>
        <Tabs>
          {Object.keys(PRODUCTS_TYPES).map((productKey, index) => (
            <Tab key={productKey} tabName={productKey} active={index === 0}>
              {PRODUCTS_TYPES[productKey as keyof typeof PRODUCTS_TYPES].name}
            </Tab>
          ))}
        </Tabs>
        <TabContent>
          {Object.keys(PRODUCTS_TYPES).map((productTypeKey, index) => {
            const typeKey = productTypeKey as keyof typeof PRODUCTS_TYPES;
            return (
              <TabProductsPanel
                key={typeKey}
                tabName={typeKey}
                active={index === 0}
              >
                {IMAGES_OF_PRODUCTS[typeKey].map((imageOfProduct) => (
                  <Product
                    key={imageOfProduct.src}
                    imgPath={`${PRODUCTS_IMAGES_PATH}/${typeKey}/${imageOfProduct.src}`}
                    text={imageOfProduct.alt}
                    alt={imageOfProduct.alt}
                  />
                ))}
              </TabProductsPanel>
            );
          })}
        </TabContent>
      </div>
    </Section>
  );
};

export default Products;
