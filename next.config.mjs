const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  basePath: isVercel ? '' : '/next5',
  assetPrefix: isVercel ? '' : '/next5',
};

export default nextConfig;