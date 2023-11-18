import GithubLogo from '@/assets/github.svg';

export const Footer = () => {
  return (
    <footer className="w-full m-auto flex justify-center pt-6 md:pt-0 mt-6 mb-2">
      <div className="w-fit mr-2">Created by &copy;Vlad Tarnovskiy</div>
      <a href="https://github.com/VladTarnovskiy">
        <img src={GithubLogo} width={20} height={20} alt="Github" />
      </a>
    </footer>
  );
};
