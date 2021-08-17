package main.java.com.bridgedemo;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.widget.Toast;

public class ToastModule extends ReactContextBaseJavaModule{
	public ToastModule(ReactApplicationContext reactContext){
		super(reactContext);
	}
    @Override
    public String getName(){
        return "ToastModule";
    }
    @ReactMethod
    public void showToast(String message){
        Toast.makeText(getReactApplicationContext(),message,Toast.LENGTH_SHORT).show();
    }
	
}
