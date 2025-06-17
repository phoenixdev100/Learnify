$imageUrls = @{
    "hero-bg.jpg" = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1920"
    "hero-illustration.png" = "https://raw.githubusercontent.com/language-app-assets/main/hero-illustration.png"
    "pattern-bg.png" = "https://raw.githubusercontent.com/language-app-assets/main/pattern-bg.png"
    "cta-bg.jpg" = "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1920"
}

$outputDir = "..\public\images"

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = Join-Path $outputDir $image.Key
    Write-Host "Downloading $($image.Key) to $outputPath"
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "All images downloaded successfully!"
