
import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int operator = 0;
        do{
            showMenu();

            operator = getOperator(input);

            if(operator == 5){
                break;
            }

            double one = getNumber(input);
            double two = getNumber(input);

            if (operator == 4 && two == 0) {
                System.out.println("Cannot divide by zero");
                continue;
            }

            double result = calculate(operator, one, two);
            System.out.println("Result: " + result);
            
        }while(operator != 5);
    }
    
    public static double calculate(int operator, double one, double two){
        switch(operator){
                case 1:
                    return one + two;
                case 2:
                    return one - two;
                case 3:
                    return one * two;
                case 4:
                    return one / two;
            }
        return 0;
    }

    public static double getNumber(Scanner input){
        while (true){ 
            try{
                double value = input.nextDouble();
                return value;
            }catch(InputMismatchException e){
                System.out.println("Enter a number.");
                input.nextLine();
            }
        }
    }

    public static void showMenu() {
        System.out.print("""
                         ===== CALCULATOR =====
                         1. Addition
                         2. Subtraction
                         3. Multiplication
                         4. Division
                         5. Exit
                         
                         Enter choice:  """);
    }

    static int getOperator(Scanner input){
        while (true){ 
            try{
                int operator = input.nextInt();

                if(operator >= 1 && operator <= 5){
                    return operator;
                }
                System.out.println("Invalid choice. Please select 1-5.");

            }catch(InputMismatchException e){
                System.out.println("Enter a number.");
                input.nextLine();
            }
        }
    }
}
