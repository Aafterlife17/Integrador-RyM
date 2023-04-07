import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

const useCharacter = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);
  const { detailID } = useParams();

  useEffect(() => {
    dispatch(getCharacterDetail(detailID));

    return () => {
      dispatch(cleanDetail());
    };
  }, [detailID]);

  return character;
};

export default useCharacter;
