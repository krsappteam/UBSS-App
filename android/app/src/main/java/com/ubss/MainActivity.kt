package com.ubss

import android.graphics.Color
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.ViewGroup
import android.widget.ImageView
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  private val splashHandler = Handler(Looper.getMainLooper())
  private val hideSplash = Runnable {
    (splashScreen?.parent as? ViewGroup)?.removeView(splashScreen)
    splashScreen = null
  }
  private var splashScreen: ImageView? = null

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    splashScreen = ImageView(this).apply {
      setBackgroundColor(Color.WHITE)
      setImageResource(R.drawable.splashscreen)
      scaleType = ImageView.ScaleType.FIT_CENTER
    }
    addContentView(
        splashScreen,
        ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT,
        ),
    )
    splashHandler.postDelayed(hideSplash, SPLASH_DURATION_MS)
  }

  override fun onDestroy() {
    splashHandler.removeCallbacks(hideSplash)
    super.onDestroy()
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "UBSS"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  private companion object {
    const val SPLASH_DURATION_MS = 2_000L
  }
}
