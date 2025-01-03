'use client';
import Blogtableitem from '@/components/Addmincomponents/Blogtableitem/page';
const page = () => {
  // Example state and fetch logic (commented out for now)
  // const [blogs, setBlogs] = useState([]);
  // const fetchBlogs = async () => {
  //   const response = await axios.get('/api/blog');
  //   setBlogs(response.data.blogs);
  // };

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-5 text-center">All Blogs</h1>
        <div className="relative h-[80vh] overflow-x-auto border border-gray-400 rounded-lg scrollbar-hide">
          <table className="w-full text-gray-500">
            <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
              <tr>
                <th scope="col" className="hidden sm:block px-6 py-3">
                  Author Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example map logic (commented out for now)
              {blogs.map((item, index) => {
                return <Blogtableitem key={index} />;
              })} */}
              <Blogtableitem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
