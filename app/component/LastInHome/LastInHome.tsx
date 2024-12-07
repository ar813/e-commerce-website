import Card from "./Card"

const LastInHome = () => {
  return (
    <div className="grid gap-[88px] my-[60px] mb-[100px] lg:grid-cols-3 lg:px-[100px]">
        <Card picture="one" heading="FREE AND FAST DELIVERY" subHeading="Free delivery for all orders over $140" />
        <Card picture="two" heading="24/7 CUSTOMER SERVICE" subHeading="Friendly 24/7 customer support" />
        <Card picture="three" heading="MONEY BACK GUARANTEE" subHeading="We reurn money within 30 days" />
    </div>
  )
}

export default LastInHome