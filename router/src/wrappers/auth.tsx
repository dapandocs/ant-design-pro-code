import { Navigate, Outlet } from 'umi';

export default () => {
  const { search } = location;
  const params = new URLSearchParams(search.substring(1));
  if (params.get('isHasAuth') === '0') {
    return <Navigate to="/user/login" />;
  }
  return <Outlet />;
};
