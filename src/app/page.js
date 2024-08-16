// 'SSR Fetch Demo'
const MyComponent = async () => {
  try {
    const response = await fetch("https://craft.alike.io/items/faqs");
    console.log("===========>", response);
  } catch (error) {
    console.error("Error ::::::::::: ", error);
  }

  return (
    <div>
      <h1>Hello Wrold</h1>
    </div>
  );
};

export default MyComponent;
