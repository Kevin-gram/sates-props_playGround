function Blog({ blogs }) {
  return (
    <div className="grid grid-cols-2 gap-2 justify-center mx-24 ">
      {blogs.map((item) => (
        <div key={item.id} className=" bg-blue-400  text-xl w-full">
          <p className=" text-2xl font-semibold">Title:{item.title}</p>
          <h1>Body:{item.body}</h1>
        </div>
      ))}
    </div>
  );
}
export default Blog;
