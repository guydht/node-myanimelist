/** src: https://github.com/jikan-me/jikan/blob/master/src/Model/Common/MalUrl.php */
export default interface MalUrl {
  name: string;
  url: string;
  mal_id: number;
  type: MalUrlType;
}

enum MalUrlType {
  Anime = "anime",
  Manga = "manga",
  Character = "character",
  Profile = "profile",
}
