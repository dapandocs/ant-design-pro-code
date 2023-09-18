import { useEffect } from 'react';
import { request } from 'umi';

const Welcome = () => {
  // 获取水果列表
  // const fetchFruits = async () => {
  //   const result = await request('/api/getFruitList');
  //   console.log(result);
  // };

  // 获取动态数据
  const fetchData = async (length: number) => {
    const result = await request(`/api/generateData`, {
      method: 'GET',
      params: {
        length,
      },
    });
    console.log('result', result);
  };

  useEffect(() => {
    // fetchFruits();
    fetchData(10);
  }, []);

  return <div>这是欢迎页面！</div>;
};
export default Welcome;
