import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';



// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // nameFormControl = new FormControl('', [Validators.required, Validators.email]);
  // surnameFormControl = new FormControl('', [Validators.required, Validators.email]);
  // matcher = new MyErrorStateMatcher();


  myForm: FormGroup | any;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { 
    this.calculatePassYear();
  }

  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.myForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'password': [null, [Validators.required]],
      'validate': ''
    });
  }
  getErrorEmail() {
    return this.myForm.get('email').hasError('required') ? 'Field is required' :
      this.myForm.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.myForm.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.myForm.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.myForm.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }


  onSubmit() {
    this.myForm.reset();
  }

  visible:boolean = true;
  changetype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


  // currentDate: any = new Date();
  // selectedMatDate!: Date;
  // ordinaryDateSelected!: Date;

  Back10Year: any;
  todo = [
    'Uniform',
    'Books',
    '1 Wand',
'1 Cauldron (pewter, standard size 2)',
'1 set of glass or crystal phials',
'1 telescope',
'1 set of brass scales',
'Students may also bring an Owl, a Cat or a Toad'
  ];

  done = [
   ''
    // 'Get up',
    // 'Brush teeth',
    // 'Take a shower',
    // 'Check e-mail',
    // 'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  calculatePassYear(){
    var date = new Date();
    date.setFullYear( date.getFullYear() - 10 );
this.Back10Year=date;
  }
  

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  
}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


