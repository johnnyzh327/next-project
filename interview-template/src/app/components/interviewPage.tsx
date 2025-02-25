export default function InterviewPage() {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="w-full flex flex-col justify-center items-start text-pretty">
        <ul>
          <li>
            1. place a Resizable panel at the center of this page. Must use the
            <a
              href="https://ui.shadcn.com/docs/components/resizable"
              target="_blank"
            >
              <span className="text-green-500  hover:font-bold">
                &nbsp;Resizable Component.&nbsp;
              </span>
            </a>
          </li>
          <li>
            2. Display pictures in above resizable component. you can get
            pictures from
            <a href="https://place.dog/" target="_blank">
              <span className="text-green-500  hover:font-bold">
                &nbsp;Simple Dog Picture Service.&nbsp;
              </span>
            </a>
          </li>
          <li>
            3. Push a
            <span className="text-green-500  hover:font-bold">
              &nbsp;Pull Request&nbsp;
            </span>
            to the repo. Thats it!
          </li>
        </ul>
      </div>
    </div>
  );
}
