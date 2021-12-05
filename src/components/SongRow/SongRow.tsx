import React from "react";
import "./songRow.scss";

// TODO: add types
function SongRow({ track }: any) {
  const [, { url }]: any = track?.album.images || [{}];

  return (
    <div className="songRow">
      <img src={url} className="songRow__album" alt={track?.name} />
      <div className="songRow__info">
        <h1>{track?.name}</h1>
        <p>
          {track?.artists.map((artist: any) => artist.name).join(", ")}
          {track?.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
