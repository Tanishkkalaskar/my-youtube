import React, { useEffect } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_COMMENTS } from "../utils/constants";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../utils/VideosSlice";

const CommentList = ({ id }) => {
  const dispatch = useDispatch();

  const comments = useSelector((store) => store.videos.comments);

  useEffect(() => {
    getCommentsForVideo();
    return () => dispatch(addComments(null));
  }, []);

  const getCommentsForVideo = async () => {
    const data = await fetch(YOUTUBE_COMMENTS + id + YOUTUBE_API_KEY);
    const json = await data.json();
    dispatch(addComments(json.items));
  };

  return (
    <div>
      {comments && (
        <>
          <h2 className="font-semibold">{comments.length} comments</h2>
          {comments.map((comment) => (
            <Comment
              key={comment?.id}
              snippet={comment?.snippet?.topLevelComment?.snippet}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CommentList;
