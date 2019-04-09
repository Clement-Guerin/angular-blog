export class Post {
  title: string;
  content: string;
  likeIts: number;
  createdAt: Date;

  constructor(title: string, content: string, likeIts: number) {
    this.title = title;
    this.content = content;
    this.likeIts = likeIts;
    this.createdAt = new Date();
  }

  onLike() {
    this.likeIts++;
  }

  onDislike() {
    this.likeIts--;
  }
}
