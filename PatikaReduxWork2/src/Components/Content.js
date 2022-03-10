import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { buyProduct, changeCount, sellProduct } from "../redux/ProductsSlice";
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const Header = styled.div`
  width: 60%;
  height: 250px;
  margin: 15px auto;
  text-align: center;
  background-color: white;
  padding: 10px 15px;

  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
    height: fit-content;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
    padding: 10px 0px;
  }
`;
const ImageContainer = styled.div`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  background-color: #a29bfe;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media only screen and (max-width: 800px) {
    width: 110px;
    height: 110px;
  }
`;
const H1 = styled.h1`
  color: ${(props) => props.color};
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
const MoneyContainer = styled.div`
  width: 60%;
  margin: 0px auto;
  text-align: center;
  background-color: #6c5ce7;
  padding: 0px 15px;
  position: sticky;
  top: 5px;
  margin-bottom: 10px;
  z-index: 999;

  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
    padding: 0px;
  }
`;
const ProductsContainer = styled.div`
  width: 60%;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;

  padding: 0px 15px;
  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

const ProductContainer = styled.div`
  width: 280px;
  height: fit-content;

  display: inline-block;
  text-align: center;
  padding: 15px;
  background-color: white;
  margin: 10px 10px;
  @media only screen and (max-width: 1150px) {
    width: 250px;
  }
  @media only screen and (max-width: 900px) {
    width: 220px;
  }
  @media only screen and (max-width: 700px) {
    width: 190px;
    margin: 10px 5px;
  }
`;
const ProductImageContainer = styled.div`
  width: 90%;
  height: 150px;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1150px) {
    height: 140px;
  }
  @media only screen and (max-width: 900px) {
    height: 130px;
  }
  @media only screen and (max-width: 700px) {
    width: 120px;
  }
`;

const ProductImage = styled.img`
  max-height: 90%;
  max-width: 90%;
  margin: auto;
`;
const ProductName = styled.h3`
  padding: 0;
`;
const ProductPrice = styled.h4`
  padding: 0;
  opacity: 0.6;
`;
const ProductFooter = styled.div`
  width: 95%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;
const SellButton = styled.button`
  width: 30%;
  padding: 8px 25px;
  background-color: white;
  border: none;
  background-color: ${(props) =>
    props.isActive ? "#d63031" : "rgba(220,220,220)"};
  border-radius: 2px;
  color: white;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.2s all;
  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
  @media only screen and (max-width: 1150px) {
    padding: 8px 20px;
  }
  @media only screen and (max-width: 900px) {
    padding: 8px 10px;
  }
  @media only screen and (max-width: 700px) {
    padding: 8px 5px;
  }
`;
const ProductCountInput = styled.input`
  width: 15%;
  padding: 4px 10px;
  border-radius: 5px;
  border: 1px solid #a29bfe;
  text-align: center;
  outline-color: rgba(220, 220, 220);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const BuyButton = styled.button`
  width: 30%;
  padding: 8px 25px;
  background-color: white;
  border: none;
  background-color: ${(props) =>
    props.isActive ? "#a29bfe" : "rgba(220,220,220)"};
  border-radius: 2px;
  color: white;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.2s all;
  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
  @media only screen and (max-width: 1150px) {
    padding: 8px 20px;
  }
  @media only screen and (max-width: 900px) {
    padding: 8px 10px;
  }
  @media only screen and (max-width: 700px) {
    padding: 8px 5px;
  }
`;
const ReceiptContainer = styled.div`
  width: 50%;
  margin: 15px auto 0px auto;
  text-align: center;
  background-color: white;
  padding: 15px 20px 20px;
  margin-bottom: 65px;
  @media only screen and (max-width: 1450px) {
    width: 65%;
  }
  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
    height: fit-content;
    padding: 15px 10px 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 15px 7px 20px;
  }
`;
const ReceiptHeader = styled.h2`
  margin: 0;
`;
const ReceiptList = styled.div`
  margin-top: 15px;
  background-color: #a29bfe;
  border-radius: 20px;
  padding: 15px;
  @media only screen and (max-width: 800px) {
    padding: 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 8px;
  }
`;
const ReceiptItem = styled.div`
  width: 80%;
  margin: auto;
`;
const ReceipItemText = styled.h3`
  width: 30%;
  color: white;
  display: inline-block;
  text-align: ${(props) => props.align || "left"};
  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 11px;
  }
`;
const Line = styled.div`
  width: 80%;
  margin: auto;
  height: 1px;
  border-bottom: 1px dashed rgba(255, 255, 255);
`;

const Content = () => {
  const arr = useSelector((state) => state.products.products);
  const money = useSelector((state) => state.products.money);
  const dispatch = useDispatch();
  const change = (id, countInCart, price, e) => {
    let count = e.target.value;
    if (count[0] === "0") {
      count = Number((count + "").substring(1));
    } else if (count === "") {
      count = 0;
    }
    e.target.value = count;
    console.log(countInCart);
    if (money + countInCart * price < count * price) {
      count = Math.floor((money + countInCart * price) / price);
    }
    dispatch(changeCount({ id: id, count: count }));
  };
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Container>
      <div style={{ height: 1 }}></div>
      <Header>
        <ImageContainer>
          <Image src="images/elon-musk.jpg" />
        </ImageContainer>
        <H1 color="#a29bfe">Spend Elon Musk Money</H1>
      </Header>
      <MoneyContainer>
        <H1 color="white" style={{ padding: "15px 0px", margin: 0 }}>
          {"$" + numberWithCommas(money)}
        </H1>
      </MoneyContainer>
      <ProductsContainer>
        {arr.map((p, id) => (
          <ProductContainer key={id}>
            <ProductImageContainer>
              <ProductImage src={"images/" + p.image} />
            </ProductImageContainer>
            <ProductName>{p.name}</ProductName>
            <ProductPrice>${numberWithCommas(p.price)}</ProductPrice>
            <ProductFooter>
              <SellButton
                isActive={p.countInCart > 0}
                onClick={() =>
                  p.countInCart > 0 ? dispatch(sellProduct(id)) : ""
                }
              >
                Sell
              </SellButton>
              <ProductCountInput
                type="number"
                value={p.countInCart}
                onChange={(e) => change(id, p.countInCart, p.price, e)}
              />
              <BuyButton
                isActive={money / p.price >= 1}
                onClick={() =>
                  money / p.price >= 1 ? dispatch(buyProduct(id)) : ""
                }
              >
                Buy
              </BuyButton>
            </ProductFooter>
          </ProductContainer>
        ))}
      </ProductsContainer>
      {money !== 187000000000 && (
        <ReceiptContainer>
          <ReceiptHeader>Your Receipt</ReceiptHeader>
          <ReceiptList>
            {arr.map((p, id) => {
              return (
                p.countInCart > 0 && (
                  <ReceiptItem key={id}>
                    <ReceipItemText>{p.name}</ReceipItemText>
                    <ReceipItemText align="center">
                      {p.countInCart}
                    </ReceipItemText>
                    <ReceipItemText align="right">
                      ${numberWithCommas(p.countInCart * p.price)}
                    </ReceipItemText>
                  </ReceiptItem>
                )
              );
            })}
            <Line />
            <ReceiptItem>
              <ReceipItemText style={{ width: "50%", textAlign: "center" }}>
                Total
              </ReceipItemText>
              <ReceipItemText style={{ width: "50%", textAlign: "center" }}>
                ${numberWithCommas(187000000000 - money)}
              </ReceipItemText>
            </ReceiptItem>
          </ReceiptList>
        </ReceiptContainer>
      )}
    </Container>
  );
};

export default Content;
