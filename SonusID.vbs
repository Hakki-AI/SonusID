Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

appDir = "c:\SonusID"

' Node.exe tam yolu (PC yeniden baslatildiginda PATH olmasa bile calisir)
nodeExe = "C:\Program Files\nodejs\node.exe"
If Not fso.FileExists(nodeExe) Then
    nodeExe = "C:\Program Files (x86)\nodejs\node.exe"
End If
If Not fso.FileExists(nodeExe) Then
    nodeExe = "node.exe"  ' PATH'te varsa kullan
End If

' Sunucu acik mi kontrol et
isUp = False
On Error Resume Next
Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
http.open "GET", "http://127.0.0.1:5173/manifest.json", False
http.setTimeouts 800, 800, 800, 800
http.send
isUp = (Err.Number = 0 And http.status = 200)
On Error GoTo 0

If Not isUp Then
    ' Sunucuyu arka planda tamamen sessiz baslat
    WshShell.Run """" & nodeExe & """ """ & appDir & "\server.cjs""", 0, False
    WScript.Sleep 2000
End If

' Edge yolunu bul
edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
If Not fso.FileExists(edgePath) Then
    edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
End If

localAppData = WshShell.ExpandEnvironmentStrings("%LOCALAPPDATA%")
profileDir = localAppData & "\SonusID\profile"

' SonusID penceresini ac
cmdLine = """" & edgePath & """ --app=""http://127.0.0.1:5173"" --user-data-dir=""" & profileDir & """ --window-size=1280,860"
WshShell.Run cmdLine, 1, False
