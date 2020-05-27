import { Component, OnInit, Input, ViewChild, Inject } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { baseURL } from "../shared/baseurl";
import { TopicService } from "../services/topic.service";

@Component({
  selector: "app-topics",
  templateUrl: "./topics.component.html",
  styleUrls: ["./topics.component.css"],
})
export class TopicsComponent implements OnInit {
  topics: any;
  errMess: string;
  cid: number;

  constructor(
    private topicservice: TopicService,
    private route: ActivatedRoute,
    @Inject("baseURL") private baseURL
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.cid = +params["id"];
          return this.topicservice.gettopic(+params["id"]);
        })
      )
      .subscribe(
        (chapter) => {
          // this.chapters = chapter;
          this.topics = chapter.filter((item) => {
            return item.cid == this.cid;
          });
          console.log(this.topics);
        },
        (errmess) => (this.errMess = <any>errmess)
      );
  }
}
