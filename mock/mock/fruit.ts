import type { Request, Response } from 'express';

export default {
  // 获取水果列表
  'GET /api/getFruitList': [
    {
      id: 1,
      name: 'apple',
      price: 10,
      description: '苹果',
    },
    {
      id: 2,
      name: 'banana',
      price: 10,
      description: '香蕉',
    },
  ],

  // 动态生成数据
  'GET /api/generateData': (req: Request, res: Response) => {
    const { length = 1 }: any = req.query;
    const data = [];
    for (let i = 0; i < Number(length); i++) {
      data.push({
        id: i,
        name: `name${i}`,
        price: Math.floor(Math.random() * 100),
        description: `description${i}`,
      });
    }
    res.send(data);
  },
};
