import { useGetGifByIdQuery } from "@/services/api";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Button from "@/components/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite } from "@/store/slices/favorites.slice";
import Gif from "@/components/Gif/Gif";
import { selectPressedStatus } from "@/store/selectors/favorites.selector";
import { toast, ToastContainer } from "react-toastify";
import style from "./GidIdPage.module.scss";
import { useState } from "react";

const GifIdPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetGifByIdQuery(id || "", { skip: !id });
  const gifData = data?.data;
  const gifUrl = gifData?.images.original.url;
  const user = gifData?.user;
  const isPressed = useAppSelector(selectPressedStatus(gifData?.id || ""));
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(gifUrl || "");
    toast.success("Link is copied!");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2100);
  };

  const handleDownload = () => {
    window.open(gifUrl, "_blank");
  };

  if (isLoading) return <ClipLoader color="white" size={64} />;
  if (!gifUrl) return <div>GIF not found</div>;

  return (
    <div className={style.gifID}>
      <div className={style.textContent}>
        <div className={style.infoContainer}>
          <img
            src={
              user?.avatar_url ||
              "https://cdn-icons-png.flaticon.com/512/16522/16522939.png"
            }
            alt="USER AVATAR"
          />
          <div className={style.info}>
            <h2>{user?.display_name || "Anonim"}</h2>
            <a href={user?.profile_url} target="_blank">
              @{user?.username || "Anonim"}
              {user?.is_verified && (
                <img
                  style={{ width: "15px", height: "15px" }}
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="icon"
                />
              )}
            </a>
            <div className={style.desc}>
              <p>{user?.description || "No description."}</p>
            </div>
          </div>
        </div>
        <div className={style.buttons}>
          <Button
            startContent={
              isPressed
                ? `https://img.icons8.com/?size=100&id=10287&format=png&color=F20303`
                : "https://img.icons8.com/?size=100&id=10287&format=png&color=FFFFFF"
            }
            onClick={() => dispatch(addFavorite(gifData))}
          >
            {isPressed ? "Removed" : "Favorite"}
          </Button>
          <Button
            startContent="https://img.icons8.com/?size=100&id=11322&format=png&color=FFFFFF"
            onClick={handleCopy}
          >
            {isCopied ? "Copied!" : "Copy Link"}
          </Button>
          <Button
            startContent="https://img.icons8.com/?size=100&id=vk3CfSUT5UA6&format=png&color=FFFFFF"
            onClick={handleDownload}
          >
            Download
          </Button>
        </div>
      </div>
      <Gif item={gifData} variant="random" />
      <ToastContainer
        position="bottom-right"
        limit={1}
        theme="dark"
        autoClose={1500}
        closeOnClick
        pauseOnHover={false}
      />
    </div>
  );
};

export default GifIdPage;
