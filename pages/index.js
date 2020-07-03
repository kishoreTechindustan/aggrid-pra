
import Layout from '../components/Layout/Layout';
import Landpage from '../components/Landpage/Landpage';
import axios from 'axios'
 function Home() {

  return (
    <div>
      <Layout>
        <Landpage  />
      </Layout>
    </div>
  );
}


// Home.getInitialProps = async (ctx) => {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   // const posts = await res.json()
//   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     return { posts: res.data }
// }

export default Home;