import ReactPlayer from "react-player";

interface Result {
  link: string,
}

type Results = {
  results?: Result[];
}

type Props = {
  results: Results | null | undefined,
}

function Videos(props: Props) {
  const results = props.results;
  const videos = results?.results;

  return (
    <div className="flex flex-wrap">
      {
        videos?.map((video, index) => 
          video.link.includes('www.youtube.com') ?
          (<div key={ index } className="p-3">
            <ReactPlayer url={ video.link } controls width="295px" height="180px"/>
          </div>) : 
          <></>
        )
      }
    </div>
  )
}

export default Videos;
