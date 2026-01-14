# GitHub Pages Custom Domain Setup (via GitHub UI)

## Domain: muradhossen.portfolio.com

### Step 1: Configure in GitHub UI

1. Go to your repository on GitHub
2. Navigate to: **Settings → Pages**
3. Under **"Custom domain"**:
   - Enter: `muradhossen.portfolio.com`
   - Click **Save**
   - GitHub will automatically create a CNAME file

### Step 2: Add DNS Record at Your DNS Provider

**This is the critical step that fixes the DNS check!**

Go to where you manage DNS for `portfolio.com` (your domain registrar or DNS provider like Cloudflare, GoDaddy, Namecheap, etc.)

#### Add a CNAME Record:

```
Type: CNAME
Name: muradhossen
Value: YOUR_GITHUB_USERNAME.github.io
TTL: 3600 (or Auto/Default)
```

**Important**: 
- Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
- For example, if your GitHub username is `Mrcodehunter`, the value should be: `mrcodehunter.github.io`
- The Name field should be just `muradhossen` (not the full domain)

#### Example DNS Configuration:

If your GitHub username is `mrcodehunter`:

```
Type: CNAME
Name: muradhossen
Value: mrcodehunter.github.io
TTL: 3600
```

### Step 3: Wait for DNS Propagation

- DNS changes typically take **15-30 minutes** to propagate
- Can take up to 48 hours in rare cases
- GitHub's DNS check will pass once the CNAME record is propagated

### Step 4: Verify DNS is Working

After adding the DNS record, verify it's working:

1. **Check DNS propagation**: 
   - Visit: https://www.whatsmydns.net/#CNAME/muradhossen.portfolio.com
   - Should show your GitHub Pages URL

2. **Use command line** (optional):
   ```bash
   nslookup muradhossen.portfolio.com
   # or
   dig muradhossen.portfolio.com CNAME
   ```

3. **Check GitHub Pages settings**:
   - Go back to Settings → Pages
   - The DNS check should show as successful (green checkmark)
   - You'll see "DNS check successful" message

### Step 5: Enable HTTPS (After DNS is Configured)

Once DNS check passes:
1. Go to Settings → Pages
2. Check the **"Enforce HTTPS"** checkbox
3. GitHub will automatically provision an SSL certificate (may take a few hours)

## Common Issues & Solutions

### ❌ DNS Check Still Unsuccessful

**Problem**: DNS check shows as unsuccessful even after adding CNAME record

**Solutions**:
1. **Wait longer**: DNS propagation can take 15-30 minutes
2. **Verify CNAME value**: Must be exactly `yourusername.github.io` (case-sensitive)
3. **Check record type**: Must be CNAME, not A record
4. **Clear DNS cache**: 
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
5. **Verify at DNS provider**: Make sure the record was saved correctly

### ❌ Wrong CNAME Value

**Common mistakes**:
- ❌ `github.io` (missing username)
- ❌ `github.com` (wrong domain)
- ❌ `www.github.io` (shouldn't have www)
- ✅ `mrcodehunter.github.io` (correct format)

### ❌ CNAME Record Not Found

**Check**:
1. Did you save the DNS record at your provider?
2. Is the Name field correct? (should be `muradhossen` for subdomain)
3. Is the record type set to CNAME (not A, AAAA, or TXT)?

### ✅ Correct Setup Checklist

- [ ] CNAME record added at DNS provider
- [ ] CNAME value is `yourusername.github.io`
- [ ] Custom domain entered in GitHub Pages settings
- [ ] Waited 15-30 minutes for DNS propagation
- [ ] DNS check shows as successful in GitHub
- [ ] HTTPS enabled (after DNS check passes)

## Quick Reference

**Your DNS Record Should Look Like This:**

```
Host/Name: muradhossen
Type: CNAME
Value/Points to: YOUR_GITHUB_USERNAME.github.io
TTL: 3600
```

**To Find Your GitHub Username:**
- Look at your GitHub profile URL: `https://github.com/YOUR_USERNAME`
- Or check the default GitHub Pages URL: `https://YOUR_USERNAME.github.io`

## Still Having Issues?

1. **Double-check the CNAME value** - This is the #1 cause of DNS failures
2. **Verify DNS propagation** - Use whatsmydns.net to check
3. **Check GitHub Pages settings** - Look for any error messages
4. **Contact your DNS provider** - If the record isn't showing up

## Notes

- GitHub automatically creates/manages the CNAME file when you enter the domain in the UI
- The CNAME file in `public/CNAME` will also be included in your build
- Both methods work, but GitHub UI is the recommended approach
- HTTPS is automatically provisioned by GitHub after DNS is configured
