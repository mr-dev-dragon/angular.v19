import { Component, WritableSignal, signal } from '@angular/core';

interface UserProfile {
  name: string;
  age: number;
  skills: string[];
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>User Profile</h2>
      <p>Name: {{ userProfile().name }}</p>
      <p>Age: {{ userProfile().age }}</p>
      <p>Skills: {{ userProfile().skills.join(', ') }}</p>
      <button (click)="updateName()">Update Name</button>
      <button (click)="incrementAge()">Increment Age</button>
      <button (click)="addSkill()">Add Skill</button>
    </div>
  `
})
export class AppComponent {
  userProfile: WritableSignal<UserProfile> = signal({
    name: 'John Doe',
    age: 25,
    skills: ['Angular', 'TypeScript']
  });

  updateName() {
    this.userProfile.mutate(profile => {
      profile.name = 'Jane Smith';
    });
  }

  incrementAge() {
    this.userProfile.mutate(profile => {
      profile.age += 1;
    });
  }

  addSkill() {
    this.userProfile.mutate(profile => {
      profile.skills.push('RxJS');
    });
  }
}
