import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import githubIcon from '../public/images/icons/github.jpeg';

const Home: NextPage = () => (
  <div className="notice">
    <h3>사이트 준비중</h3>
    <p>빠른 시일내 완료 하겠습니다.</p>
    <p>kwkang.dev</p>
    <Link href="https://github.com/kkwondev">
      <Image src={githubIcon} width={50} height={50} />
    </Link>
  </div>
);

export default Home;
