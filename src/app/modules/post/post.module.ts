import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { PostRoutingModule } from './services/post-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
