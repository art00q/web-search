import cutString from "../../assets/helpers/cutString";

interface Result {
  image: {
    src: string,
    alt: string,
  },
  link: {
    href: string,
    title: string,
  },
}

type Results = {
  image_results?: Result[];
}

type Props = {
  results: Results | null | undefined,
}

function Images(props: Props) {
  const results = props.results;
  const resultsArray = results?.image_results;

  return (
    <div className="mx-5">
      <div className="flex flex-wrap justify-start items-center gap-5">
        {
          resultsArray?.map((image, index) => 
            <a key={ index } href={ image.link.href } target="_blank" className="sm:max-w-[20%] lg:max-w-[15%] max-w-[40%] hover:underline">
              <img src={ image.image.src } alt={ image.image.alt }/>
              <p className="break-words text-sm dark:text-gray-200 text-gray-900">
                { image.link.title }
              </p>
            </a>
          )
        }
      </div>
    </div>
  )
}

export default Images;
