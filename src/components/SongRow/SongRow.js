import React from "react";
import "./songRow.scss";

function SongRow({ track }) {
  const [, { url } = {}] = track?.album.images || [];

  return (
    <div className="songRow">
      <img src={url} className="songRow__album" alt={track?.name} />
      <div className="songRow__info">
        <h1>{track?.name}</h1>
        <p>
          {track?.artists.map((artist) => artist.name).join(", ")}
          {track?.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
