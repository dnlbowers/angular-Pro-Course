import {
  AfterViewInit, ChangeDetectorRef,
  Component, ComponentRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {User} from "./auth-form/auth-form.interface";
import {AuthFormComponent} from "./auth-form/auth-form.component";
import {AuthRememberComponent} from "./auth-form/auth-remember.component";

@Component({
  selector: 'app-root',
  template: `
    <div>
        <button (click)="destroyComponent()">
          Destroy
        </button>
        <div #entry></div>
        <button (click)="moveComponent()">
          Move
        </button>
    </div>
  `,
  styles: [`
    div {
      flex-direction: column;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  componentRef: ComponentRef<AuthFormComponent> | undefined;

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef | null = null;

constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.entry?.createComponent(AuthFormComponent)
      this.componentRef = this.entry?.createComponent(AuthFormComponent, {index: 0});
      if (this.componentRef){
        this.componentRef.instance.title ='Create Account';
        this.componentRef.instance.submitted.subscribe(this.loginUser);
      }
      this.cdr.detectChanges();
  }

    destroyComponent(){
      this.componentRef?.destroy()
    }

  moveComponent() {
    if (this.componentRef){
      this.entry?.move(this.componentRef.hostView, 1);
    }
  }

  loginUser(user: User) {
    console.log('login', user);
  }
}
