import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  medications: Medication[];

  ngOnInit(): void {
    this.medications = new Array();
  }

  // Add new medication to the medications array
  add(id: number, name: string, dose: number, repeat: number): void {
    name = name.trim();
    if (!name) {
      return;
    }

    // Do not add if the medication already exists
    let duplicateMedications: Medication[] = new Array();
    if (this.medications.filter((m) => m.medicationName === name).length > 0) {
      return;
    }

    // Create new medication object to be pushed
    var medication: Medication = {
      medicationId: id,
      medicationName: name,
      medicationDose: dose,
      medicationRepeat: repeat,
    };

    this.medications.push(medication);
    alert('Medication added.');
  }

  // Remove a medication from the medications array
  remove(name: string) {
    // Check for the existence of the medication
    if (this.medications.filter((m) => m.medicationName === name).length > 0) {
      this.medications = this.medications.filter(
        (m) => m.medicationName !== name
      );
      alert('Medication removed.');
    }
  }
}
